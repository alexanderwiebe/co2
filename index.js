const i2c = require("i2c-bus");

const SPG30_ADDR = 0x58;

const cmd_serialId = 0x3682;

const getCO2 = () => {
  console.log("starting");

  const i2c1 = i2c.openSync(1);
  console.log("init");

  // Enter one shot mode (this is a non volatile setting)
  // i2c1.writeByteSync(SPG30_ADDR, cmd_serialId, 0x03);
  i2c1.readWord(SPG30_ADDR, cmd_serialId, (err, val) => {
    console.log("cb");
    console.error(err);
    console.log("val");
    console.log(val);
  });

  // console.log("starting wait");

  // // Wait while non volatile memory busy
  // while (i2c1.readByteSync(SPG30_ADDR, cmd_serialId) & 0x48) {}
  // console.log("done wait");
  // const rawSerialId = i2c1.readWordSync(SPG30_ADDR, CMD_READ_TEMP);
  // console.log(reawSerialId);
  // console.log("raw serial id");

  // Start temperature conversion
  // i2c1.sendByteSync(SPG30_ADDR, CMD_START_CONVERT);

  // Wait for temperature conversion to complete
  // while ((i2c1.readByteSync(SPG30_ADDR, CMD_ACCESS_CONFIG) & 0x80) === 0) {
  // }

  // Display temperature
  // const rawTemp = i2c1.readWordSync(SPG30_ADDR, CMD_READ_TEMP);
  // console.log('temp: ' + toCelsius(rawTemp));

  i2c1.closeSync();
};

getCO2();
