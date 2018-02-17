angular.module('TicTacToeApp', [])
    .controller('TicTacToeAppController', function ($scope) {
        // Write code simple calculator operations
        $scope.playerTurn = true;
        $scope.display = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
        $scope.communicate= 'Start By Clicking a Square on the Grid. X goes first!';
        $scope.GameOver = false;

        $scope.XO = function(index) {
            if (!$scope.GameOver) {

                if ($scope.display[index] == ' ') {
                    if ($scope.playerTurn == true) {
                        $scope.display[index] = 'X';
                        $scope.communicate="It's player O's turn!";
                    }
                    else {
                        $scope.display[index] = 'O';
                        $scope.communicate="It's player X's turn!";
                    }
                    $scope.playerTurn = !$scope.playerTurn;
                    console.log($scope.playerTurn)

                }
                else {
                    console.log('Place is taken');
                    $scope.communicate = 'That place is taken.';
                }
                //check if there's a winner
                $scope.row1 = $scope.display[0] == $scope.display[1] && $scope.display[0] == $scope.display[2] && $scope.display[1] == $scope.display[2] && $scope.display[0] != ' ';
                $scope.row2 = $scope.display[3] == $scope.display[4] && $scope.display[3] == $scope.display[5] && $scope.display[4] == $scope.display[5] && $scope.display[3] != ' ';
                $scope.row3 = $scope.display[6] == $scope.display[7] && $scope.display[6] == $scope.display[8] && $scope.display[7] == $scope.display[8] && $scope.display[6] != ' ';

                $scope.col1 = $scope.display[0] == $scope.display[3] && $scope.display[0] == $scope.display[6] && $scope.display[3] == $scope.display[6] && $scope.display[0] != ' ';
                $scope.col2 = $scope.display[1] == $scope.display[4] && $scope.display[1] == $scope.display[7] && $scope.display[4] == $scope.display[7] && $scope.display[1] != ' ';
                $scope.col3 = $scope.display[2] == $scope.display[5] && $scope.display[2] == $scope.display[8] && $scope.display[5] == $scope.display[8] && $scope.display[2] != ' ';

                $scope.diag1 = $scope.display[0] == $scope.display[4] && $scope.display[0] == $scope.display[8] && $scope.display[4] == $scope.display[8] && $scope.display[0] != ' ';
                $scope.diag2 = $scope.display[2] == $scope.display[4] && $scope.display[2] == $scope.display[6] && $scope.display[4] == $scope.display[6] && $scope.display[2] != ' ';

                if (
                    $scope.row1 ||
                    $scope.row2 ||
                    $scope.row3 ||

                    $scope.col1 ||
                    $scope.col2 ||
                    $scope.col3 ||

                    $scope.diag1 ||
                    $scope.diag2
                ) {
                    //check for winner X
                    if (
                        $scope.row1 && $scope.display[0] == 'X' ||
                        $scope.row2 && $scope.display[3] == 'X' ||
                        $scope.row3 && $scope.display[6] == 'X' ||

                        $scope.col1 && $scope.display[0] == 'X' ||
                        $scope.col2 && $scope.display[1] == 'X' ||
                        $scope.col3 && $scope.display[2] == 'X' ||

                        $scope.diag1 && $scope.display[0] == 'X' ||
                        $scope.diag2 && $scope.display[2] == 'X'

                    ) {
                        console.log($scope.row1, $scope.row2, $scope.row3, $scope.col1, $scope.col2, $scope.col3, $scope.diag1, $scope.diag2);
                        console.log('The Winner is X');
                        $scope.communicate = 'The Winner is X!!!';
                        $scope.GameOver = true;

                    }
                    //check for winner O
                    if (
                        $scope.row1 && $scope.display[0] == 'O' ||
                        $scope.row2 && $scope.display[3] == 'O' ||
                        $scope.row3 && $scope.display[6] == 'O' ||

                        $scope.col1 && $scope.display[0] == 'O' ||
                        $scope.col2 && $scope.display[1] == 'O' ||
                        $scope.col3 && $scope.display[2] == 'O' ||

                        $scope.diag1 && $scope.display[0] == 'O' ||
                        $scope.diag2 && $scope.display[2] == 'O'

                    ) {
                        console.log($scope.row1, $scope.row2, $scope.row3, $scope.col1, $scope.col2, $scope.col3, $scope.diag1, $scope.diag2);
                        console.log('The Winner is O');
                        $scope.communicate = 'The Winner is O!!!';
                        $scope.GameOver = true;
                    }
                }
                //check for Cat game
                if (!$scope.display.includes(" ")) {
                    console.log('The game is a Cat')
                    $scope.communicate = 'The game is a Tie. Try Again!';
                    $scope.GameOver = true;
                }
            }
        }

        $scope.reset = function(){
            $scope.playerTurn = true;
            $scope.display = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
            $scope.communicate= 'Start By Clicking a Square on the Grid. X goes first!';
            $scope.GameOver = false;
        }



    });