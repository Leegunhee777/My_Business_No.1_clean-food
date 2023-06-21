import { getCsrfToken, getJwtToken } from "../../../context/auth-context-provider";
import { HttpClient } from "../../../network/axios";
import Socket from "../../../network/socket";
import { DetailRepositoryImpl } from "../repository/detail-repository-impl";
import { DetailUseCase } from "../usecase/detail-usecase";

const http = new HttpClient(() => getCsrfToken());
const socket = new Socket(()=> getJwtToken());

const detailRepositoryImpl = new DetailRepositoryImpl(http, socket);
const detailUseCase = new DetailUseCase(detailRepositoryImpl);

export  {
  detailUseCase,
}

