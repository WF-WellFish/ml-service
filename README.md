# 🐟 Wellfish Fish Classifier API

Welcome to the Wellfish Fish Classifier API! This Node.js service classifies images of fish into different species using TensorFlow.js. The machine learning model is fetched from a Google Cloud Storage bucket.

## 📑 Table of Contents

- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App Locally](#running-the-app-locally)
- [📜 Class Labels](#-class-labels)
- [📜 API Documentation](#-api-documentation)
- [🎨 Contributing](#-contributing)
- [📧 Contact](#-contact)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Google Cloud SDK](https://cloud.google.com/sdk)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/fish-classifier-api.git
    cd fish-classifier-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add your environment variables:

    ```env
    MODEL_URL=your-model-url
    PORT=your-port
    ```
### Running the App Locally

1. **Start the server:**

    ```bash
    npm start
    ```

2. **API Usage:**

    - **Endpoint:** `POST /classify`
    - **Request Body:** Form-data with an image file

    Example using `curl`:

    ```bash
    curl -X POST -F 'image=@/path/to/your/image.jpg' http://localhost:3000/classify
    ```

## 📜 Class Labels

The model can classify the following fish species. Each class has a unique static key that should not be changed:

```json
{
  "0": "Bangus",
  "1": "Big Head Carp",
  "2": "Black Spotted Barb",
  "3": "Catfish",
  "4": "Climbing Perch",
  "5": "Fourfinger Threadfin",
  "6": "Freshwater Eel",
  "7": "Glass Perchlet",
  "8": "Goby",
  "9": "Gold Fish",
  "10": "Gourami",
  "11": "Grass Carp",
  "12": "Green Spotted Puffer",
  "13": "Indian Carp",
  "14": "Indo-Pacific Tarpon",
  "15": "Jaguar Gapote",
  "16": "Janitor Fish",
  "17": "Knifefish",
  "18": "Long-Snouted Pipefish",
  "19": "Mosquito Fish",
  "20": "Mudfish",
  "21": "Mullet",
  "22": "Pangasius",
  "23": "Perch",
  "24": "Scat Fish",
  "25": "Silver Barb",
  "26": "Silver Carp",
  "27": "Silver Perch",
  "28": "Snakehead",
  "29": "Tenpounder",
  "30": "Tilapia"
}
```

## 📜 API Documentation 

For detailed API documentation, visit our [Postman Documentation](https://documenter.getpostman.com/view/19448005/2sA3XPBhJE).

## 🎨 Contributing

We welcome contributions! Please fork the repository and submit a pull request with your changes.

## 📧 Contact

For any questions or suggestions, please open an issue or contact us at: 

✉️ **WellFishBangkit@gmail.com**

---

🌟 **Thank you for using the Wellfish Fish Classifier API!** 🌟

---