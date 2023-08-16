pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:7-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                echo 'Building the app'
                sh '''docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db
                -e MYSQL_USER=username -e MYSQL_PASSWORD=password -d mysql:5.7'''
                sh 'sleep 30'
                sh 'npm install --force'
                sh 'npm run dev'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:7-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                echo 'Building the app'
                sh '''docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db
                -e MYSQL_USER=username -e MYSQL_PASSWORD=password -d mysql:5.7'''
                sh 'sleep 30'
                sh 'npm install --force'
                sh 'npm run dev'
                sh './smokeTest.sh'
            }
        }
    }
}
