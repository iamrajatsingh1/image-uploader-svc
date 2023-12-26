# Image Uploader Service (image-uploader-svc)

## Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker (optional, for containerization)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/iamrajatsingh1/image-uploader-svc.git
   cd image-uploader-svc
   ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Environment Variables:**
    Create a .env file in the root directory with the following content:

    ```bash
    PORT=3001
    API_KEY=12342atsdyau
    ```

4. **Run the Service:**

    ```bash
    npm start

The service will be accessible at http://localhost:3001.

## Docker Setup (Optional)
If you prefer running the service in a Docker container:

1. **Build Docker Image:**

    ```bash
    docker build -t image-uploader-svc .
    ```

2. **Run Docker Container:**

    ```bash
    docker run -p 3001:3001 -d image-uploader-svc
    ```

## Running Test Cases**

1. **To run the test cases:**

    ```bash
    npm test

## API Documentation
1. **Upload Cat Pic**
Endpoint: ```POST /cats/upload```
Description: Upload a cat picture.
Request Body: Form Data with a field named catPic containing the cat picture file.
Response: JSON object with details of the uploaded cat picture.
2. **Delete Cat Pic**
Endpoint: ```DELETE /cats/delete/:id```
Description: Delete a cat picture by its ID.
Parameters: id - ID of the cat picture to delete.
Response: Status 204 if successful, 404 if the cat picture is not found.
3. **Update Cat Pic**
Endpoint: ```PUT /cats/update/:id```
Description: Update a cat picture by its ID.
Parameters: id - ID of the cat picture to update.
Request Body: Form Data with a field named catPic containing the updated cat picture file.
Response: JSON object with details of the updated cat picture.
4. **Fetch Cat Pic by ID**
Endpoint: ```GET /cats/fetch/:id```
Description: Fetch a cat picture by its ID.
Parameters: id - ID of the cat picture to fetch.
Response: Cat picture file.
5. **List Cat Pics**
Endpoint: ```GET /cats/list```
Description: Get a list of all cat pictures.
Response: JSON array containing details of all cat pictures.