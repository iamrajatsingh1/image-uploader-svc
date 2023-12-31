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
    ```

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

## Running Test Cases

 1. **To run the test cases:**
    
    npm test

## API Documentation

### 1. Upload Cat Pic

- **Endpoint:** `POST /cats/upload`
- **Description:** Upload a cat picture.
- **Request:**
  - **Method:** `POST`
  - **Endpoint:** `/cats/upload`
  - **Request Body:** Form Data
    - `catPic`: Cat picture file
- **Response:**
  - **Status:** 201 Created
  - **Body:** JSON object with details of the uploaded cat picture.
    ```json
    {
      "id": 1,
      "filename": "cat-picture.jpg"
    }
    ```

### 2. Delete Cat Pic

- **Endpoint:** `DELETE /cats/delete/:id`
- **Description:** Delete a cat picture by its ID.
- **Request:**
  - **Method:** `DELETE`
  - **Endpoint:** `/cats/delete/:id`
    - **Parameters:** `id` - ID of the cat picture to delete.
- **Response:**
  - **Status:** 204 No Content if successful, 404 Not Found if the cat picture is not found.

### 3. Update Cat Pic

- **Endpoint:** `PUT /cats/update/:id`
- **Description:** Update a cat picture by its ID.
- **Request:**
  - **Method:** `PUT`
  - **Endpoint:** `/cats/update/:id`
    - **Parameters:** `id` - ID of the cat picture to update.
  - **Request Body:** Form Data
    - `catPic`: Updated cat picture file
- **Response:**
  - **Status:** 200 OK
  - **Body:** JSON object with details of the updated cat picture.
    ```json
    {
      "id": 1,
      "filename": "updated-cat-picture.jpg"
    }
    ```

### 4. Fetch Cat Pic by ID

- **Endpoint:** `GET /cats/fetch/:id`
- **Description:** Fetch a cat picture by its ID.
- **Request:**
  - **Method:** `GET`
  - **Endpoint:** `/cats/fetch/:id`
    - **Parameters:** `id` - ID of the cat picture to fetch.
- **Response:**
  - **Status:** 200 OK
  - **Body:** Cat picture file.

### 5. List Cat Pics

- **Endpoint:** `GET /cats/list`
- **Description:** Get a list of all cat pictures.
- **Request:**
  - **Method:** `GET`
  - **Endpoint:** `/cats/list`
- **Response:**
  - **Status:** 200 OK
  - **Body:** JSON array containing details of all cat pictures.
    ```json
    [
      {
        "id": 1,
        "filename": "cat-picture.jpg"
      },
      {
        "id": 2,
        "filename": "updated-cat-picture.jpg"
      }
    ]
    ```
