import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../shared/prisma";
import { Filters, Pagination, University } from "./university.interface";

const createUniversity = async (universityInfo: University) => {
  const result = await prisma.university.create({
    data: universityInfo,
  });
  return result;
};


const getAllUniversities = async (
  filters: Filters,
  pagination: Pagination
) => {
  const { page, limit } = pagination;
  const skip = (page - 1) * limit;

  const whereConditions: Prisma.UniversityWhereInput = {
    country: filters.country ? String(filters.country) : undefined,
    location: filters.location ? String(filters.location) : undefined,
    tuitionFee: {
      gte: filters.minFee ? Number(filters.minFee) : undefined,
      lte: filters.maxFee ? Number(filters.maxFee) : undefined,
    },
    ranking: {
      gte: filters.minRank ? Number(filters.minRank) : undefined,
      lte: filters.maxRank ? Number(filters.maxRank) : undefined,
    },
    establishedYear: {
      gte: filters.minYear ? Number(filters.minYear) : undefined,
      lte: filters.maxYear ? Number(filters.maxYear) : undefined,
    },
  };

  const [data, total] = await Promise.all([
    prisma.university.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: { ranking: "asc" },
    }),
    prisma.university.count({ where: whereConditions }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data,
  };
};


export const universityService = {
  createUniversity,
  getAllUniversities,
};
