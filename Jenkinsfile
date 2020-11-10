pipeline {
    agent any 
    tools {nodejs "node"}
    stages {
        stage('Git') {
            steps { 
              git 'https://github.com/korada27/nodets_mongo_testing.git'
              }
           }
        stage('Build') { 
            steps {
              echo 'build successful'
              bat 'npm install'
            }
        }
        stage('Test') { 
            steps {
                echo 'test successful' 
            }
        }
        stage('Deploy') { 
            steps {
                 echo 'deploy successful' 
            }
        }
    }
}