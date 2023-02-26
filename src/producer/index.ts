import Kafka from "node-rdkafka";
import eventType from "../event-type";

const stream: Kafka.ProducerStream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
    dr_cb: true,
  },
  {},
  { topic: "test" }
);

const queueMessage = (): void => {
  const event = { noise: "woof" };
  const success = stream.write(Buffer.from(eventType.toBuffer(event)));
  if (success) {
    console.log("Message queued");
  } else {
    console.log("Message not queued");
  }
};

setInterval(() => {
  queueMessage();
}, 3000);
