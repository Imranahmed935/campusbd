import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { universityService } from "./university.service";
import { Filters} from "./university.interface";

const createUniversity = catchAsync(async (req: Request, res: Response) => {
  const universityInfo = req.body;
  const result = await universityService.createUniversity(universityInfo);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "University Created Successfully!!",
    data: result,
  });
});


const getAllUniversities = catchAsync(async (req: Request, res: Response) => {
  const {
    country,
    location,
    minFee,
    maxFee,
    minRank,
    maxRank,
    minYear,
    maxYear,
    page = "1",
    limit = "10",
  } = req.query;

  const filters = {
    country,
    location,
    minFee,
    maxFee,
    minRank,
    maxRank,
    minYear,
    maxYear,
  };

  const pagination = {
    page: Number(page),
    limit: Number(limit),
  };

  const result = await universityService.getAllUniversities(filters as Filters, pagination);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All Universities Retrieved Successfully!!",
    meta: result.meta,
    data: result.data,
  });
});

export const universityController = {
  createUniversity,
  getAllUniversities,
};
