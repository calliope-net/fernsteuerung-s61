function modell_Callibot () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.send00M0Joystick(
        btf.btf_sendBuffer19(),
        sender.sender_xmotor(),
        sender.sender_servo16(),
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u2
        )
        btf.setSensor(btf.btf_sendBuffer19(), btf.eBufferPointer.m0, btf.eSensor.b5Spur, sender.sender_ButtonB_Switch())
    } else if (sender.isFunktion(sender.eFunktion.f10fernstartenAbstand)) {
        sender.send10AbstandAusweichen(
        btf.btf_sendBuffer19(),
        255,
        16,
        64,
        0,
        sender.sender_zehntelsekunden(btf.ePause.s1),
        btf.e3Abstand.u2
        )
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.md, true)
    } else if (sender.isFunktion(sender.eFunktion.f10fernstartenSpurfolger)) {
        sender.send10Spurfolger(
        btf.btf_sendBuffer19(),
        192,
        160,
        31,
        0,
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u0,
        sender.sender_zehntelsekunden(btf.ePause.s1)
        )
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.mc, sender.sender_ButtonB_Switch())
    } else if (sender.isFunktion(sender.eFunktion.f20fahrplan) && sender.sender_ButtonA_Switch()) {
    	
    } else if (sender.isFunktion(sender.eFunktion.f20fahrplan) && sender.sender_ButtonB_Switch()) {
    	
    } else if (sender.isFunktion(sender.eFunktion.f20fahrplan)) {
    	
    }
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b0, sender.joystickButtonPosition())
}
function modell_MKC_Gabelstapler () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.send00M0Joystick(
        btf.btf_sendBuffer19(),
        sender.sender_xmotor(),
        sender.sender_servo16(),
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u1
        )
        btf.setSensor(btf.btf_sendBuffer19(), btf.eBufferPointer.m0, btf.eSensor.b5Spur, sender.sender_ButtonB_Switch())
    } else if (sender.isFunktion(sender.eFunktion.m0_m1_s0)) {
        sender.send00M01Gabelstapler(
        btf.btf_sendBuffer19(),
        sender.sender_motorProzent(sender.sender_xmotor(), 50),
        sender.sender_ButtonAB_Counter(),
        sender.sender_ymotor()
        )
    }
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b0, sender.joystickButtonPosition())
}
input.onButtonEvent(Button.AB, btf.buttonEventValue(ButtonEvent.Hold), function () {
    sender.setSendReset(true)
})
function mkc () {
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1Motor(153, 29, 40),
    sender.sender_1Motor(103, 29, 40),
    sender.sender_1Motor(192, 16, 10),
    sender.sender_1Motor(153, 3, 153),
    sender.sender_1Motor(64, 16, 10),
    1,
    true,
    true,
    btf.e3Abstand.u1
    )
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1Motor(153, 29, 40),
    sender.sender_1Motor(103, 29, 40),
    sender.sender_1Motor(192, 16, 10),
    sender.sender_1Motor(153, 3, 153),
    sender.sender_1Motor(64, 16, 10),
    1,
    true,
    false,
    btf.e3Abstand.u1
    )
    btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
}
function modell_MKC_Kran () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.send00M0Joystick(
        btf.btf_sendBuffer19(),
        sender.sender_xmotor(),
        sender.sender_servo16(),
        false,
        btf.e3Abstand.u1
        )
    } else if (sender.isFunktion(sender.eFunktion.ma_mb)) {
        sender.send00MABKran(btf.btf_sendBuffer19(), sender.sender_xmotor(), sender.sender_ymotor())
        btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b1, true)
    } else if (sender.isFunktion(sender.eFunktion.mc_mb)) {
        sender.send00MCBKran(btf.btf_sendBuffer19(), sender.sender_xmotor(), sender.sender_ymotor())
        btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b1, true)
    }
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b0, sender.joystickButtonPosition())
    sender.send00MDKranMagnet(btf.btf_sendBuffer19(), sender.sender_ButtonB_Switch(), 240)
}
function callibot () {
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1Motor(192, 31, 30),
    sender.sender_1Motor(64, 31, 30),
    sender.sender_1Motor(255, 16, 20),
    sender.sender_1Motor(192, 1, 115),
    sender.sender_1Motor(1, 16, 20),
    1,
    true,
    false,
    btf.e3Abstand.u0
    )
    sender.send2x2Motoren(
    btf.btf_sendBuffer19(),
    sender.sender_2Motoren(240, 240, 30, 30),
    sender.sender_2Motoren(160, 96, 198, 198, true, 1),
    8,
    true,
    true,
    btf.e3Abstand.u1
    )
    btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.ma, true)
    btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sender.buttonA()
    if (sender.isFunktion(sender.eFunktion.f20fahrplan)) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x007fff)
        sender.send5Strecken(
        btf.btf_sendBuffer19(),
        true,
        2,
        true,
        btf.e3Abstand.u1,
        sender.sender_1MotorPicker(80, 90, 50),
        sender.sender_1MotorPicker(-50, 90, 50)
        )
        btf.sendData(btf.btf_sendBuffer19())
        btf.zeige5x5Buffer(btf.btf_sendBuffer19())
        btf.zeige5x5Joystick(btf.btf_sendBuffer19())
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), Colors.Off)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    sender.buttonAB()
    if (sender.isFunktion(sender.eFunktion.f20fahrplan)) {
        btf.zeige5x5Betriebsart(true, false)
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x00ff00)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sender.buttonB()
    if (sender.isFunktion(sender.eFunktion.f20fahrplan)) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x007fff)
        sender.send5Strecken(
        btf.btf_sendBuffer19(),
        true,
        1,
        true,
        btf.e3Abstand.u1,
        sender.sender_1MotorPicker(60, 90, 30),
        sender.sender_1MotorPicker(-50, 180, 20),
        sender.sender_1MotorPicker(-50, 0, 20),
        sender.sender_1MotorPicker(-60, 90, 20),
        sender.sender_1MotorPicker(60, 90, 30)
        )
        btf.sendData(btf.btf_sendBuffer19())
        btf.zeige5x5Buffer(btf.btf_sendBuffer19())
        btf.zeige5x5Joystick(btf.btf_sendBuffer19())
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), Colors.Off)
    }
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
function Konfiguration () {
    btf.comment(btf.btf_text("GitHub: calliope-net/fernsteuerung-s61"))
    btf.comment(btf.btf_text("Erweiterung: calliope-net/fernsteuerung"))
    btf.comment(btf.btf_text(",\"yotta\":{\"config\":{\"microbit-dal\":{\"bluetooth\":{\"pairing_mode\":1,\"partial_flashing\":1}}}}"))
}
function modell_MKC_Sensoren () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.send00M0Joystick(
        btf.btf_sendBuffer19(),
        sender.sender_xmotor(),
        sender.sender_servo16(),
        !(sender.sender_ButtonA_Switch()),
        btf.e3Abstand.u1
        )
        btf.setSensor(btf.btf_sendBuffer19(), btf.eBufferPointer.m0, btf.eSensor.b5Spur, sender.sender_ButtonB_Switch())
    } else if (sender.isFunktion(sender.eFunktion.f10fernstartenAbstand)) {
        sender.send10AbstandAusweichen(
        btf.btf_sendBuffer19(),
        255,
        16,
        64,
        0,
        sender.sender_zehntelsekunden(btf.ePause.s1),
        btf.e3Abstand.u2
        )
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.md, true)
    } else if (sender.isFunktion(sender.eFunktion.f10fernstartenSpurfolger)) {
        sender.send10Spurfolger(
        btf.btf_sendBuffer19(),
        255,
        192,
        31,
        0,
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u0,
        sender.sender_zehntelsekunden(btf.ePause.s1)
        )
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.mc, sender.sender_ButtonB_Switch())
    } else if (sender.isFunktion(sender.eFunktion.f20fahrplan) && sender.sender_ButtonA_Switch()) {
    	
    } else if (sender.isFunktion(sender.eFunktion.f20fahrplan) && sender.sender_ButtonB_Switch()) {
    	
    } else if (sender.isFunktion(sender.eFunktion.f20fahrplan)) {
    	
    }
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b0, sender.joystickButtonPosition())
}
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
sender.beimStart()
loops.everyInterval(400, function () {
    if (sender.isFunktion(sender.eFunktion.ng) && !(sender.isFunktion(sender.eFunktion.f20fahrplan)) && sender.joystickQwiic()) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x007fff)
        btf.fill_sendBuffer19()
        if (sender.isModell(sender.eModell.cb2e)) {
            modell_Callibot()
        } else if (sender.isModell(sender.eModell.mkcs)) {
            modell_MKC_Sensoren()
        } else if (sender.isModell(sender.eModell.mkcg)) {
            modell_MKC_Gabelstapler()
        } else if (sender.isModell(sender.eModell.mkck)) {
            modell_MKC_Kran()
        }
        btf.sendData(btf.btf_sendBuffer19())
        btf.zeige5x5Buffer(btf.btf_sendBuffer19())
        btf.zeige5x5Joystick(btf.btf_sendBuffer19())
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), Colors.Off)
    }
})
