pipeline {
    agent any
    stages {
        stage('launch db') {
            steps {
                echo 'Building the app'
                sh 'apt-get update'
                sh '''docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db
                -e MYSQL_USER=username -e MYSQL_PASSWORD=password -d mysql:5.7'''
                sh 'sleep 30'
                // sh 'npm install --force'
                // sh 'npm run dev'
            }
        }
        stage('build') {
            agent {
                docker {
                    image 'node:17.0.1'
                }
            }
            steps {
                sh 'npm install --force'
            }
        }
        // stage('build with docker')

    }
}
