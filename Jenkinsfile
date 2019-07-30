pipeline {
  agent none
  stages {
    stage('Test') {
      agent { label 'nodejs-app' }
      steps {
        sh 'java -version'
        container('nodejs') {
          echo 'Hello World!'   
          sh 'node --version'
        }
      }
    }
  }
}
