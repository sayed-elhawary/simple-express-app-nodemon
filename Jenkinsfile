pipeline {
    agent any
    stages {
        stage('Clone the repo') {
            steps {
                git url: "https://github.com/sayed-elhawary/simple-express-app-nodemon", branch: "main"
            }
        }
        stage('Build') {
            steps {
                echo 'Building the ToDo application on Docker'
                sh 'docker build . -t ap '
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application on Docker'
                sh 'docker run -p 4000:4000 -d ap '
            }
        }
    }
}
