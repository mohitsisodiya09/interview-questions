# **Age Validator**

This project is a **Node.js** and **Express.js** application written in **TypeScript**. It includes middleware to validate a user's date of birth (DOB) and determine if they are 16 years or older. Based on the user's age, the application responds appropriately with either **"Welcome"** or **"Under aged"**.

## **Features**
- Middleware to validate date of birth.
- Accepts DOB via `POST` or `GET` requests on the `/entry` route.
- Validates age against the current date.
- Responds with:
  - **"Welcome"** if the user is 16 years or older.
  - **"Under aged"** if the user is under 16 years old.


## **Requirements**
- **Node.js**
- **Express.js**
- **TypeScript**

## **Installation**
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory**:
   ```bash
   cd <folder-name>
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the application**:
   ```bash
   npm start
   ```

## **API Endpoints**
### `GET /entry/:dob`**
- **Description**: Validates the provided DOB and determines the age category.
- **Parameters**:
  - `dob`: Date of birth in the format `YYYY-MM-DD`.

- **Responses**:
  - **200 OK**: If age is 16 years or older.
    ```json
    {
      "message": "Welcome"
    }
    ```
  - **200 OK**: If age is under 16.
    ```json
    {
      "message": "Under aged"
    }
    ```
  - **400 Bad Request**: If `dob` parameter is missing.
    ```json
    {
      "message": "DOB is required"
    }
    ```

## **Technologies Used**
- **Node.js**
- **Express.js**
- **TypeScript**

## **License**
This project is licensed under the MIT License. Feel free to use and modify it as needed.

## **Contributing**
Feel free to submit pull requests or report issues.

## **Author**
**Mohit Sisodiya**