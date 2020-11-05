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
        sh 'npm install'
      }
    }  
     
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}