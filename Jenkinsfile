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
                bat "npm install cypress --save-dev"
                bat "npx cypress run --browser firefox"
            }
        }
    }

}