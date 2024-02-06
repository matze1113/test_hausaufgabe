from flask import Flask, request, jsonify
import random

app = Flask(__name__)

# Generate a random number between 1 and 20
correct_number = random.randint(1, 20)

@app.route('/game', methods=['GET'])
def game():
    # Get the 'guess' from the URL parameters
    guess = request.args.get('guess')

    if not guess:
        return jsonify({'error': 'No guess provided. Please provide a guess as a URL parameter.'}), 400

    if int(guess) == correct_number:
        return jsonify({'message': 'Congratulations! You guessed the correct number.'}), 200
    else:
        return jsonify({'message': 'Sorry, your guess was incorrect. Try again.'}), 200

if __name__ == '__main__':
    app.run(debug=True)
