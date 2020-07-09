import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DestinationComponent } from '../../destination/destination.component';
import { MedcertComponent } from '../../medcert/medcert.component';
import { IdcardComponent } from '../../idcard/idcard.component';
import { FlightsComponent } from '../../flights/flights.component';
import { HotelComponent } from '../../hotel/hotel.component';
import { AirlistComponent } from '../../airlist/airlist.component';
import { SeatmapComponent } from '../../seatmap/seatmap.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'destination',        component: DestinationComponent },
    { path: 'medcert',        component: MedcertComponent },
    { path: 'idcard',        component: IdcardComponent },
    { path: 'flights',        component: FlightsComponent },
    { path: 'hotel',        component: HotelComponent },
    { path: 'airlist',        component: AirlistComponent },
    { path: 'seatmap',        component: SeatmapComponent },

];
