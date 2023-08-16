pipeline {
    agent any
    stages {
        stage('launch db') {
            steps {
                echo 'Building the app'
                sh 'docker rm -f mysql || true'
                sh '''docker run -p 3307:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db \
                -e MYSQL_USER=username -e MYSQL_PASSWORD=password -d mysql:5.7'''
                sh 'sleep 30'
            }
        }
        stage('build') {
            agent {
                docker {
                    image 'node:20-alpine3.18'
                }
            }
            steps {
                sh 'chown -R 131:140 "/.npm"'
                sh 'Kirolos237'
                sh 'npm install --force'
            }
        }
        // stage('build with docker')

    }
}
