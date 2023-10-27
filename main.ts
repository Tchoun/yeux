/**
 * Haut/bas 1 : centre 75 / min 50 / max 100
 * 
 * Gauche droite 2 : centre 88 / min vers sa droite 50 / max 130
 * 
 * Paupière droite Haut : 3 clos milieu 65 / 40 bas / 140 ouvert max /
 * 
 * Paupière droite bas : 4 clos milieu 110 / 35 ouvert max
 * 
 * Paupière gauche Haut : 5 clos milieu 115 / 60 ouvert normal  /40 ouvert max
 * 
 * Paupière gauche bas : 6 clos milieu 80 / ouvert max 145
 */
function RegarderDevant () {
    PositionServo1 = 75
    PositionServo2 = 88
    basic.pause(200)
}
function RegarderGauche () {
    PositionServo1 = 75
    PositionServo2 = 120
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    RegarderDroite()
    basic.pause(500)
    RegarderDevant()
})
function RegarderDroite () {
    PositionServo1 = 75
    PositionServo2 = 50
    basic.pause(200)
}
function FermerPaupières () {
    PostionServo3 = 65
    PostionServo4 = 110
    PostionServo5 = 115
    PostionServo6 = 80
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, PostionServo3)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, PostionServo4)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, PostionServo5)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo6, PostionServo6)
    basic.pause(200)
}
function OuvrirPaupieres () {
    PostionServo3 = 120
    PostionServo4 = 35
    PostionServo5 = 60
    PostionServo6 = 145
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, PostionServo3)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, PostionServo4)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, PostionServo5)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo6, PostionServo6)
    basic.pause(200)
}
input.onButtonPressed(Button.B, function () {
    RegarderGauche()
    basic.pause(500)
    RegarderDevant()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    FermerPaupières()
    OuvrirPaupieres()
})
let PostionServo6 = 0
let PostionServo5 = 0
let PostionServo4 = 0
let PostionServo3 = 0
let PositionServo2 = 0
let PositionServo1 = 0
PositionServo1 = 75
PositionServo2 = 88
PostionServo3 = 90
PostionServo4 = 90
PostionServo5 = 90
PostionServo6 = 90
FermerPaupières()
OuvrirPaupieres()
basic.forever(function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, PositionServo1)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, PositionServo2)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, PostionServo3)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, PostionServo4)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo5, PostionServo5)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo6, PostionServo6)
})
