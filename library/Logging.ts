import chalk from 'chalk';

export default class Logging {
    public static log = (args: any) => this.info(args)
    public static dblog = (args: any) => console.log(chalk.bgMagenta("Database Connected"));
    public static info = (args: any) => console.log(chalk.green(`[${new Date().toLocaleString()}PM]
    [INFO]`), typeof args === 'string' ? chalk.blueBright(args) : args);
    public static warm = (args: any) => console.log(chalk.yellow(`[${new Date().toLocaleString()}PM]
    [INFO]`), typeof args === 'string' ? chalk.yellowBright(args) : args);
    public static error = (args: any) => console.log(chalk.red(`[${new Date().toLocaleString()}PM]
    [INFO]`), typeof args === 'string' ? chalk.redBright(args) : args);

}