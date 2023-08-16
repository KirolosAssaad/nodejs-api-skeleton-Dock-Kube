pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:17.0.1'
                    args '-p 3000:3000'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                    args '-v /usr/bin/docker:/usr/bin/docker'

                }
            }
            steps {
                echo 'Building the app'
                sh 'apt-get update'
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
                    image 'node:17.0.1'
                    args '-p 3000:3000'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                    args '-v /usr/bin/docker:/usr/bin/docker'

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
