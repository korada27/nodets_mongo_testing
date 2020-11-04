#!/usr/bin/env groovy
pipeline {
  agent any
  tools {nodejs "NodeJS"}
  stages {
    stage('preflight') {
      steps {
        sh 'node -v'
      }
    }
    stage('build') {
      steps {
        sh 'npm --version'
        sh 'npm install'
      }
    }
  }
}