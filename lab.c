// Define the ADC channel for the LM35 temperature sensor
#define LM35_CHANNEL 0

// Define the pins for the Green, Red and Yellow LEDs
#define GREEN_LED PORTB.B0
#define RED_LED PORTB.B1
#define YELLOW_LED PORTB.B2

void main()
{
    int16_t temp;
    float tempC;
    char str[16];

    // Initialize the ADC module and UART module
    ADC_Init();
    UART1_Init(9600);

    // Set the Green, Red and Yellow LEDs as outputs
    TRISB.B0 = 0;
    TRISB.B1 = 0;
    TRISB.B2 = 0;

    // Main loop
    while(1)
    {
        // Read the voltage from the LM35 temperature sensor
        temp = ADC_Read(LM35_CHANNEL);

        // Convert the voltage to temperature in Celsius
        tempC = ((temp * 5.0) / 1023.0) * 100.0;

        // Convert the temperature value to a string for display
        sprintf(str, "Temp: %.1f C\r\n", tempC);

        // Send the temperature string over serial communication
        UART1_Write_Text(str);

        // Turn on the appropriate LED based on the temperature
        if (tempC < 25.0) {
            GREEN_LED = 1;
            RED_LED = 0;
            YELLOW_LED = 0;
        } else if (tempC >= 25.0 && tempC < 30.0) {
            GREEN_LED = 0;
            RED_LED = 0;
            YELLOW_LED = 1;
        } else {
            GREEN_LED = 0;
            RED_LED = 1;
            YELLOW_LED = 0;
        }

        // Wait for 1 second before taking the next reading
        Delay_ms(1000);
    }
}