import express from "express";
import { AuthService } from "./tre/services/AuthService";
import { GroupService } from "./tre/services/GroupService";
import { MembershipService } from "./tre/services/MembershipService";
import { PasswordService } from "./tre/services/PasswordService";
import { PermissionService } from "./tre/services/PermissionService";
import { SecurableService } from "./tre/services/SecurableService";
import { UserService } from "./tre/services/UserService";
import { MenuService } from "./tre/services/MenusService";
import { ListService } from "./tre/services/ListService";
import { ListFilterService } from "./tre/services/ListFilterService";
import { SettingService } from "./tre/services/SettingService";
import { Logger } from "./tre/Logger";
import { WebApp } from "./tre/WebApp";
import { ContentService } from "./tre/services/ContentService";
import { ExtendedContentService } from "./tre/services/ExtendedContentService";
import { PayloadService } from "./tre/services/PayloadService";
import { AdapterService } from "./app/services/AdapterService";
import { SystemService } from "./app/services/SystemService";
import { ExtendedAdapterService } from "./app/services/ExtendedAdapterService";
import { OpenVpnService } from "./app/services/OpenVpnService";

const app = new WebApp((logger: Logger, app: express.Express) => {
    new AuthService(logger, app);
    new GroupService(logger, app);
    new MembershipService(logger, app);
    new PasswordService(logger, app);
    new PermissionService(logger, app);
    new SecurableService(logger, app);
    new UserService(logger, app);
    new MenuService(logger, app);
    new ListService(logger, app);
    new ListFilterService(logger, app);
    new SettingService(logger, app);
    new ContentService(logger, app);
    new PayloadService(logger, app);
    new ExtendedContentService(logger, app);

    // add app routes here
    new AdapterService(logger, app);
    new ExtendedAdapterService(logger, app);
    new SystemService(logger, app);
    new OpenVpnService(logger, app);

});

app.execute();