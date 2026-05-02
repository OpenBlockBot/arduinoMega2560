const { formatMessage, ArgumentType, BlockType, ProgramModeType, ArduinoPeripheral } = window.Scratch;

const PNPID_LIST = [
    'USB\\VID_2341&PID_0010',
    'USB\\VID_2341&PID_0042',
    'USB\\VID_2A03&PID_0010',
    'USB\\VID_2A03&PID_0042',
    'USB\\VID_2341&PID_0210',
    'USB\\VID_2341&PID_0242',
    'USB\\VID_1A86&PID_7523'
];

const SERIAL_CONFIG = {
    baudRate: 57600,
    dataBits: 8,
    stopBits: 1
};

const DIVECE_OPT = {
    type: 'arduino',
    fqbn: 'arduino:avr:mega:cpu=atmega2560',
    firmware: 'arduinoMega2560.hex'
};

const Pins = {
    D0: '0', D1: '1', D2: '2', D3: '3', D4: '4', D5: '5', D6: '6', D7: '7',
    D8: '8', D9: '9', D10: '10', D11: '11', D12: '12', D13: '13', D14: '14',
    D15: '15', D16: '16', D17: '17', D18: '18', D19: '19', D20: '20', D21: '21',
    D22: '22', D23: '23', D24: '24', D25: '25', D26: '26', D27: '27', D28: '28',
    D29: '29', D30: '30', D31: '31', D32: '32', D33: '33', D34: '34', D35: '35',
    D36: '36', D37: '37', D38: '38', D39: '39', D40: '40', D41: '41', D42: '42',
    D43: '43', D44: '44', D45: '45', D46: '46', D47: '47', D48: '48', D49: '49',
    D50: '50', D51: '51', D52: '52', D53: '53',
    A0: 'A0', A1: 'A1', A2: 'A2', A3: 'A3', A4: 'A4', A5: 'A5', A6: 'A6', A7: 'A7',
    A8: 'A8', A9: 'A9', A10: 'A10', A11: 'A11', A12: 'A12', A13: 'A13', A14: 'A14', A15: 'A15'
};

const Level = { High: 'HIGH', Low: 'LOW' };

const Buadrate = {
    B4800: '4800', B9600: '9600', B19200: '19200', B38400: '38400',
    B57600: '57600', B76800: '76800', B115200: '115200'
};

const Eol = { Warp: 'warp', NoWarp: 'noWarp' };

const SerialNo = { Serial0: '0', Serial1: '1', Serial2: '2', Serial3: '3' };

const Mode = { Input: 'INPUT', Output: 'OUTPUT', InputPullup: 'INPUT_PULLUP' };

const InterrupMode = { Rising: 'RISING', Falling: 'FALLING', Change: 'CHANGE', Low: 'LOW' };

const DataType = { Integer: 'INTEGER', Decimal: 'DECIMAL', String: 'STRING' };

class ArduinoMega2560 extends ArduinoPeripheral {
    constructor (runtime, deviceId) {
        super(runtime, deviceId, PNPID_LIST, SERIAL_CONFIG, DIVECE_OPT);
    }
}

class OpenBlockArduinoMega2560Device {
    get DEVICE_ID () {
        return 'arduinoMega2560';
    }

    get PINS_MENU () {
        const digital = [];
        for (let i = 0; i <= 53; i++) digital.push({ text: String(i), value: String(i) });
        const analog = [];
        for (let i = 0; i <= 15; i++) analog.push({ text: `A${i}`, value: `A${i}` });
        return digital.concat(analog);
    }

    get MODE_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoMega2560.modeMenu.input', default: 'input', description: 'label for input pin mode' }), value: Mode.Input },
            { text: formatMessage({ id: 'arduinoMega2560.modeMenu.output', default: 'output', description: 'label for output pin mode' }), value: Mode.Output },
            { text: formatMessage({ id: 'arduinoMega2560.modeMenu.inputPullup', default: 'input-pullup', description: 'label for input-pullup pin mode' }), value: Mode.InputPullup }
        ];
    }

    get ANALOG_PINS_MENU () {
        const list = [];
        for (let i = 0; i <= 15; i++) list.push({ text: `A${i}`, value: `A${i}` });
        return list;
    }

    get LEVEL_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoMega2560.levelMenu.high', default: 'high', description: 'label for high level' }), value: Level.High },
            { text: formatMessage({ id: 'arduinoMega2560.levelMenu.low', default: 'low', description: 'label for low level' }), value: Level.Low }
        ];
    }

    get PWM_PINS_MENU () {
        return [
            { text: '2', value: Pins.D2 },
            { text: '3', value: Pins.D3 },
            { text: '4', value: Pins.D4 },
            { text: '5', value: Pins.D5 },
            { text: '6', value: Pins.D6 },
            { text: '7', value: Pins.D7 },
            { text: '8', value: Pins.D8 },
            { text: '9', value: Pins.D9 },
            { text: '10', value: Pins.D10 },
            { text: '11', value: Pins.D11 },
            { text: '12', value: Pins.D12 },
            { text: '13', value: Pins.D13 },
            { text: '44', value: Pins.D44 },
            { text: '45', value: Pins.D45 },
            { text: '46', value: Pins.D46 }
        ];
    }

    get INTERRUPT_PINS_MENU () {
        return [
            { text: '2', value: Pins.D2 },
            { text: '3', value: Pins.D3 },
            { text: '18', value: Pins.D18 },
            { text: '19', value: Pins.D19 },
            { text: '20', value: Pins.D20 },
            { text: '21', value: Pins.D21 }
        ];
    }

    get INTERRUP_MODE_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoMega2560.InterrupModeMenu.risingEdge', default: 'rising edge', description: 'label for rising edge interrup' }), value: InterrupMode.Rising },
            { text: formatMessage({ id: 'arduinoMega2560.InterrupModeMenu.fallingEdge', default: 'falling edge', description: 'label for falling edge interrup' }), value: InterrupMode.Falling },
            { text: formatMessage({ id: 'arduinoMega2560.InterrupModeMenu.changeEdge', default: 'change edge', description: 'label for change edge interrup' }), value: InterrupMode.Change },
            { text: formatMessage({ id: 'arduinoMega2560.InterrupModeMenu.low', default: 'low', description: 'label for low interrup' }), value: InterrupMode.Low }
        ];
    }

    get BAUDTATE_MENU () {
        return [
            { text: '4800', value: Buadrate.B4800 },
            { text: '9600', value: Buadrate.B9600 },
            { text: '19200', value: Buadrate.B19200 },
            { text: '38400', value: Buadrate.B38400 },
            { text: '57600', value: Buadrate.B57600 },
            { text: '76800', value: Buadrate.B76800 },
            { text: '115200', value: Buadrate.B115200 }
        ];
    }

    get SERIAL_NO_MENU () {
        return [
            { text: '0', value: SerialNo.Serial0 },
            { text: '1', value: SerialNo.Serial1 },
            { text: '2', value: SerialNo.Serial2 },
            { text: '3', value: SerialNo.Serial3 }
        ];
    }

    get EOL_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoMega2560.eolMenu.warp', default: 'warp', description: 'label for warp print' }), value: Eol.Warp },
            { text: formatMessage({ id: 'arduinoMega2560.eolMenu.noWarp', default: 'no-warp', description: 'label for no warp print' }), value: Eol.NoWarp }
        ];
    }

    get DATA_TYPE_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoMega2560.dataTypeMenu.integer', default: 'integer', description: 'label for integer' }), value: DataType.Integer },
            { text: formatMessage({ id: 'arduinoMega2560.dataTypeMenu.decimal', default: 'decimal', description: 'label for decimal number' }), value: DataType.Decimal },
            { text: formatMessage({ id: 'arduinoMega2560.dataTypeMenu.string', default: 'string', description: 'label for string' }), value: DataType.String }
        ];
    }

    constructor (runtime) {
        this.runtime = runtime;
        this._peripheral = new ArduinoMega2560(this.runtime, this.DEVICE_ID);
        this._peripheral.numDigitalPins = 54;
    }

    getInfo () {
        return [
            {
                id: 'pin',
                name: formatMessage({ id: 'arduinoMega2560.category.pins', default: 'Pins', description: 'The name of the arduino mega2560 device pin category' }),
                color1: '#4C97FF', color2: '#3373CC', color3: '#3373CC',
                blocks: [
                    {
                        opcode: 'setPinMode',
                        text: formatMessage({ id: 'arduinoMega2560.pins.setPinMode', default: 'set pin [PIN] mode [MODE]', description: 'arduinoMega2560 set pin mode' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: Pins.D0 },
                            MODE: { type: ArgumentType.STRING, menu: 'mode', defaultValue: Mode.Input }
                        }
                    },
                    {
                        opcode: 'setDigitalOutput',
                        text: formatMessage({ id: 'arduinoMega2560.pins.setDigitalOutput', default: 'set digital pin [PIN] out [LEVEL]', description: 'arduinoMega2560 set digital pin out' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: Pins.D0 },
                            LEVEL: { type: ArgumentType.STRING, menu: 'level', defaultValue: Level.High }
                        }
                    },
                    {
                        opcode: 'setPwmOutput',
                        text: formatMessage({ id: 'arduinoMega2560.pins.setPwmOutput', default: 'set pwm pin [PIN] out [OUT]', description: 'arduinoMega2560 set pwm pin out' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pwmPins', defaultValue: Pins.D3 },
                            OUT: { type: ArgumentType.UINT8_NUMBER, defaultValue: '255' }
                        }
                    },
                    '---',
                    {
                        opcode: 'readDigitalPin',
                        text: formatMessage({ id: 'arduinoMega2560.pins.readDigitalPin', default: 'read digital pin [PIN]', description: 'arduinoMega2560 read digital pin' }),
                        blockType: BlockType.BOOLEAN,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: Pins.D0 }
                        }
                    },
                    {
                        opcode: 'readAnalogPin',
                        text: formatMessage({ id: 'arduinoMega2560.pins.readAnalogPin', default: 'read analog pin [PIN]', description: 'arduinoMega2560 read analog pin' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'analogPins', defaultValue: Pins.A0 }
                        }
                    },
                    '---',
                    {
                        opcode: 'setServoOutput',
                        text: formatMessage({ id: 'arduinoMega2560.pins.setServoOutput', default: 'set servo pin [PIN] out [OUT]', description: 'arduinoMega2560 set servo pin out' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pwmPins', defaultValue: Pins.D3 },
                            OUT: { type: ArgumentType.HALF_ANGLE, defaultValue: '90' }
                        }
                    },
                    '---',
                    {
                        opcode: 'attachInterrupt',
                        text: formatMessage({ id: 'arduinoMega2560.pins.attachInterrupt', default: 'attach interrupt pin [PIN] mode [MODE] executes', description: 'arduinoMega2560 attach interrupt' }),
                        blockType: BlockType.CONDITIONAL,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'interruptPins', defaultValue: Pins.D3 },
                            MODE: { type: ArgumentType.STRING, menu: 'interruptMode', defaultValue: InterrupMode.Rising }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'detachInterrupt',
                        text: formatMessage({ id: 'arduinoMega2560.pins.detachInterrupt', default: 'detach interrupt pin [PIN]', description: 'arduinoMega2560 detach interrupt' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'interruptPins', defaultValue: Pins.D3 }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    pins: { items: this.PINS_MENU },
                    mode: { items: this.MODE_MENU },
                    analogPins: { items: this.ANALOG_PINS_MENU },
                    level: { acceptReporters: true, items: this.LEVEL_MENU },
                    pwmPins: { items: this.PWM_PINS_MENU },
                    interruptPins: { items: this.INTERRUPT_PINS_MENU },
                    interruptMode: { items: this.INTERRUP_MODE_MENU }
                }
            },
            {
                id: 'serial',
                name: formatMessage({ id: 'arduinoMega2560.category.serial', default: 'Serial', description: 'The name of the arduino mega2560 device serial category' }),
                color1: '#9966FF', color2: '#774DCB', color3: '#774DCB',
                blocks: [
                    {
                        opcode: 'multiSerialBegin',
                        text: formatMessage({ id: 'arduinoMega2560.serial.multiSerialBegin', default: 'serial [NO] begin baudrate [VALUE]', description: 'arduinoMega2560 multi serial begin' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            NO: { type: ArgumentType.NUMBER, menu: 'serialNo', defaultValue: SerialNo.Serial0 },
                            VALUE: { type: ArgumentType.STRING, menu: 'baudrate', defaultValue: Buadrate.B9600 }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'multiSerialPrint',
                        text: formatMessage({ id: 'arduinoMega2560.serial.multiSerialPrint', default: 'serial [NO] print [VALUE] [EOL]', description: 'arduinoMega2560 multi serial print' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            NO: { type: ArgumentType.NUMBER, menu: 'serialNo', defaultValue: SerialNo.Serial0 },
                            VALUE: { type: ArgumentType.STRING, defaultValue: 'Hello OpenBlock' },
                            EOL: { type: ArgumentType.STRING, menu: 'eol', defaultValue: Eol.Warp }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'multiSerialAvailable',
                        text: formatMessage({ id: 'arduinoMega2560.serial.multiSerialAvailable', default: 'serial [NO] available data length', description: 'arduinoMega2560 multi serial available data length' }),
                        arguments: {
                            NO: { type: ArgumentType.NUMBER, menu: 'serialNo', defaultValue: SerialNo.Serial0 }
                        },
                        blockType: BlockType.REPORTER,
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'multiSerialReadAByte',
                        text: formatMessage({ id: 'arduinoMega2560.serial.multiSerialReadAByte', default: 'serial [NO] read a byte', description: 'arduinoMega2560 multi serial read a byte' }),
                        arguments: {
                            NO: { type: ArgumentType.NUMBER, menu: 'serialNo', defaultValue: SerialNo.Serial0 }
                        },
                        blockType: BlockType.REPORTER,
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    baudrate: { items: this.BAUDTATE_MENU },
                    serialNo: { items: this.SERIAL_NO_MENU },
                    eol: { items: this.EOL_MENU }
                }
            },
            {
                id: 'data',
                name: formatMessage({ id: 'arduinoMega2560.category.data', default: 'Data', description: 'The name of the arduino mega2560 device data category' }),
                color1: '#CF63CF', color2: '#C94FC9', color3: '#BD42BD',
                blocks: [
                    {
                        opcode: 'dataMap',
                        text: formatMessage({ id: 'arduinoMega2560.data.dataMap', default: 'map [DATA] from ([ARG0], [ARG1]) to ([ARG2], [ARG3])', description: 'arduinoMega2560 data map' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.NUMBER, defaultValue: '50' },
                            ARG0: { type: ArgumentType.NUMBER, defaultValue: '1' },
                            ARG1: { type: ArgumentType.NUMBER, defaultValue: '100' },
                            ARG2: { type: ArgumentType.NUMBER, defaultValue: '1' },
                            ARG3: { type: ArgumentType.NUMBER, defaultValue: '1000' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConstrain',
                        text: formatMessage({ id: 'arduinoMega2560.data.dataConstrain', default: 'constrain [DATA] between ([ARG0], [ARG1])', description: 'arduinoMega2560 data constrain' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.NUMBER, defaultValue: '50' },
                            ARG0: { type: ArgumentType.NUMBER, defaultValue: '1' },
                            ARG1: { type: ArgumentType.NUMBER, defaultValue: '100' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    '---',
                    {
                        opcode: 'dataConvert',
                        text: formatMessage({ id: 'arduinoMega2560.data.dataConvert', default: 'convert [DATA] to [TYPE]', description: 'arduinoMega2560 data convert' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.STRING, defaultValue: '123' },
                            TYPE: { type: ArgumentType.STRING, menu: 'dataType', defaultValue: DataType.Integer }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConvertASCIICharacter',
                        text: formatMessage({ id: 'arduinoMega2560.data.dataConvertASCIICharacter', default: 'convert [DATA] to ASCII character', description: 'arduinoMega2560 data convert to ASCII character' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.NUMBER, defaultValue: '97' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConvertASCIINumber',
                        text: formatMessage({ id: 'arduinoMega2560.data.dataConvertASCIINumber', default: 'convert [DATA] to ASCII nubmer', description: 'arduinoMega2560 data convert to ASCII nubmer' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.STRING, defaultValue: 'a' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    dataType: { items: this.DATA_TYPE_MENU }
                }
            }
        ];
    }

    setPinMode (args) {
        this._peripheral.setPinMode(args.PIN, args.MODE);
        return Promise.resolve();
    }

    setDigitalOutput (args) {
        this._peripheral.setDigitalOutput(args.PIN, args.LEVEL);
        return Promise.resolve();
    }

    setPwmOutput (args) {
        this._peripheral.setPwmOutput(args.PIN, args.OUT);
        return Promise.resolve();
    }

    readDigitalPin (args) {
        return this._peripheral.readDigitalPin(args.PIN);
    }

    readAnalogPin (args) {
        return this._peripheral.readAnalogPin(args.PIN);
    }

    setServoOutput (args) {
        this._peripheral.setServoOutput(args.PIN, args.OUT);
        return Promise.resolve();
    }
}

export default OpenBlockArduinoMega2560Device;
