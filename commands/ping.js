module.exports={
    name:'ping',
    description: "Ping command",
    execute(message, args, Discord, client){
        message.channel.send(`🏓API Latency is ${Math.round(client.ws.ping)}ms`);
        }
};