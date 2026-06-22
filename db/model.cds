namespace ust.SOReq;

using {managed} from '@sap/cds/common';

entity SalesOrderRequisition : managed {
    key ID                    : UUID;
        requisitionNo         : String(20);
        status                : String(20); // DRAFT, SUBMITTED, ON_HOLD, COMPLETED
        version               : Integer;

        customerID            : String(40);
        customerName          : String(120);

        buyerID               : String(40);
        buyerName             : String(120);

        material              : String(40);
        materialDescription   : String(200);

        quantity              : Decimal(13, 3);
        unit                  : String(10);

        plant                 : String(10);

        requestedDeliveryDate : Date;

        targetPrice           : Decimal(15, 2);
        currency              : String(3);

        justification         : String(1000);

        items                 : Composition of many SalesOrderRequisitionItem
                                    on items.requisition = $self;

        pendingSnapshot       : LargeString;
        pendingVersionBefore  : Integer;
        pendingRequestedBy    : String(40);
        pendingRequestedAt    : Timestamp;
        pendingSummary        : String(1000);
}

entity SalesOrderRequisitionItem : managed {
    key ID                    : UUID;

        requisition           : Association to SalesOrderRequisition;

        itemNo                : Integer;

        material              : String(40);
        materialDescription   : String(200);

        quantity              : Decimal(13, 3);
        unit                  : String(10);

        targetPrice           : Decimal(15, 2);

        requestedDeliveryDate : Date;
}
