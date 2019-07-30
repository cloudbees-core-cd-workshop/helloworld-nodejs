pipeline {
  agent none
  stages {
    stage('Say Hello') {
      agent { label 'nodejs-app' }
      steps {
        echo 'Hello World!'   
        sh 'java -version'
      }
    }
  }
}
