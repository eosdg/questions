pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('Preparation') {
      parallel {
        stage('Dependencies') {
          steps {
            sh 'npm ci'
          }
        }

        stage('Information') {
          steps {
            sh 'node -v'
            sh 'npm -v'
          }
        }

      }
    }

    stage('Test') {
        steps {
            sh 'npm run test'
        }
    }
 }
 post {
    always {
        junit 'junit.xml'
    }
 }
  environment {
    HOME = '.'
  }
}