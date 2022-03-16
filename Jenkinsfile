pipeline{

    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/integration/*.feature", description: "DESC")
        choice(name: 'BROWSER', choices: ['chrome'], description: "DESC")
    }


    stages{
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npm cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}