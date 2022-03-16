pipeline{

    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/integration/*.feature", description: "DESC")
        choise(name: 'BROWSER', choises: ['chrome'], description: "DESC")
    }

    options{
    }

    stages{
        stage('Deploying'){
            echo "Building application"
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npm cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

       stage('Deploying'){
            echo "Deploy is complete"
       }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}