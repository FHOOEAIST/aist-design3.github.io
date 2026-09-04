---
lang: en
page_id: pub:efficient-classification-of-live-sensor-data-on-low-energy-iot-devices-with-simp
permalink: /publications/efficient-classification-of-live-sensor-data-on-low-energy-iot-devices-with-simp/
date: 2024-12-31
title: Efficient classification of live sensor data on Low-Energy IoT devices
  with simple Machine Learning methods
reference: Hanreich M., Krauss O., Zwettler G. “Efficient classification of live sensor
  data on Low-Energy IoT devices with simple Machine Learning methods“, EUROCAST 2024.
category: ml
external_url: https://eurocast2024.fulp.ulpgc.es/documents/Eurocast_2024_Extended_Abstract_Book.pdf
---

Internet of Things (IoT) devices are ubiquitous, but often cannot be permanently connected to the power grid and therefore have to rely on batteries and other energy sources like solar power. These mobile devices should run over a long period without the need for recharging, but still be able to perform comparatively complex tasks from the realm of machine learning like a classification task on live sensor data. The state-of-the-art as far as accuracy is concerned are Neural Network models like LSTM (Long short-term memory) or CNN (Convolutional neural network). However, these models usually take up more Flash memory, more RAM of the devices and more CPU time than traditional machine learning approaches, which in turn causes a higher energy demand. Another possibility is to transfer the time series data to an external server to do the calculations there and send back the result. For a continuous classification of sensor data, this approach is often not feasible, since the constant transmission of a large quantity of data over a wireless network is required. We discuss a pipeline for efficient time series classification of live sensor data on low-energy IoT devices with on-device processing. We present our case study of detecting boats docking at an IOT-enabled buoy, which is required to be energy-self-sufficient for several months at a time.