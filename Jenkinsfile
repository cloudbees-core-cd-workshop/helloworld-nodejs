pipeline {
  agent { label 'nodejs-app' }
  stages {
    stage('Test') {
      steps {
        container('nodejs') {
          echo 'Hello World!'   
          sh 'java -version'
        }
      }
    }
  }
}
