import Kafka from "node-rdkafka";

const consumer: Kafka.KafkaConsumer = new Kafka.KafkaConsumer(
  {
    "group.id": "kafka",
    "metadata.broker.list": "localhost:9092",
  },
  {}
);

consumer.connect();

consumer
  .on("ready", () => {
    console.log("Consumer ready");
    consumer.subscribe(["test"]);
    consumer.consume();
  })
  .on("data", (data: Kafka.Message) => {
    console.log(`Message received: ${data.value}`);
  });
