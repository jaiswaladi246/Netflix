## Setting Up the Netflix Clone Application

Follow these steps to set up and run the Netflix clone application on your local machine:

### 1. Update Package List

Run the following commands to update the package list on your system:

```bash
sudo apt update
```

### 2. Install Required Packages

Install the necessary packages and dependencies for the application using the following command:

```bash
sudo apt install -y curl dirmngr apt-transport-https lsb-release ca-certificates
```

### 3. Install Node.js

Install Node.js, a JavaScript runtime, with the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs
```

### 4. Install Project Dependencies

Navigate to the project directory and install the project-specific dependencies:

```bash
npm install
```

### 5. Start the Application: Works

To start the Netflix clone application, use the following command:

```bash
npm start &
```

### 6. Optional & May Not Work: Serve the Built Application

If you want to serve the built version of the application, you can use the `serve` package. First, install it globally:

```bash
npm install -g serve
```

Then, serve the built application on port 4000:

```bash
serve -s build -l 4000
```

Now you should be able to access the Netflix clone application by opening your web browser and navigating to `http://localhost:4000`.

Enjoy exploring the Netflix clone!
