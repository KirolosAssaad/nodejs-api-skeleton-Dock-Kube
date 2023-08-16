pipeline {
    // docker node agent
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    // environment variables
    environment {
        DOCKER_USER = credentials('docker')
    }
    // stages
    stages {
        stage('Build') {
            steps {
                sh 'docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db -e MYSQL_USER=username -e MYSQL_PASSWORD=password -d mysql:5.7'
                sh 'sleep 30'
                sh 'npm install --force'
                sh 'npm run dev'
            }
        }
        stage('Smoke Test') {
            steps {
                sh 'docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db -e MYSQL_USER=username -e MYSQL_PASSWORD=password -d mysql:5.7'
                sh 'sleep 30'
                sh 'npm install --force'
                sh 'npm run dev'
                sh './smokeTest'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
