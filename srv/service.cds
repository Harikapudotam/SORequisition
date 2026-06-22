using ust.SOReq as SOReq from '../db/model';

service MyService{
    entity SalesOrderRequisition as projection on SOReq.SalesOrderRequisition;
    entity SalesOrderRequisitionItem as projection on SOReq.SalesOrderRequisitionItem;
}