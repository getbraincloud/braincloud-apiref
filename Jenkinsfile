pipeline {
    agent { 
        node {
            label 'linux_35'
            }
      }
    triggers {
        pollSCM 'H * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                npm install
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                npm run serve
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                aws --profile JenkinsAPIDOCSS3Bucket s3 sync apiref s3://apiref-working-public/apiref-dev
                zip -r "bcdoc-${BUILD_ID}.zip" build
                '''
            }
        }
    }
}