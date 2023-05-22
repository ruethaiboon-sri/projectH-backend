import mongoose from "mongoose";
import Activity from "../models/activity-model.js";

export const getAllData = async (req, res, next) => {
  const gotData = await Activity.find({}).exec();
  return res.status(200).json(gotData);
};

export const deleteCard = async (req, res, next) => {
  Activity.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.error(err));
};

// vvvvvvvvvv Add by Bonn vvvvvvvvvvv
export const getUserData = async (req, res, next) => {
  const gotData = await Activity.find({ user: req.user.user_id }).exec();
  return res.status(200).json(gotData);
};

export const createActivity = async (req, res) => {
  const data = req.body;
  const userId = req.user.user_id;
  try {
    const newActivity = await Activity.create({
      activityName: data.activityName,
      activityType: data.activityType,
      startTime: data.startTime,
      finishTime: data.finishTime,
      activityDetail: data.activityDetail,
      activityImage: data.activityImage,
      distance: data.distance,
      user: userId,
    });
    if (!createActivity) {
      return res.status(400).json({ message: "Cannot add new activity!" });
    }
    const newData = await newActivity.save();
    return (
      newData,
      res.status(200).json({ message: "New activity added successfully!" })
    );
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
};
