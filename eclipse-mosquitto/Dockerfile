FROM alpine:latest

LABEL Description="Eclipse Mosquitto MQTT Broker"

RUN apk --no-cache add mosquitto && \
    mkdir -p /mosquitto/config /mosquitto/data /mosquitto/log && \
    cp /etc/mosquitto/mosquitto.conf /mosquitto/config && \
    chown -R mosquitto:mosquitto /mosquitto

COPY start.sh /
RUN chmod +x start.sh

CMD ["/start.sh"]
