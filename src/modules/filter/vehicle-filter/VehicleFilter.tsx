import { SelectChangeEvent, TextField } from '@material-ui/core';
import * as React from 'react';
import { ComboBox } from '../../../components/ComboBox/ComboBox';
import { SimpleDatePicker } from '../../../components/DatePicker/DatePicker';
import { vehicleFilterItems } from '../../../mock/Filter.mock';
import { TextsProvider } from '../../../translation/filter/vehicle-filter';
import './VehicleFilter.scss';

const texts = TextsProvider.get()

export function VehicleFilter() {
    const [hasVehicle, setHasVehicle] = React.useState('');

    return <div className="VehicleFilter">
        <div className="VehicleFilterAdjustFields">
            <div className="VehicleFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.VEHICLE_BRAND_LABEL}
                    className="VehicleFilterBrand"
                />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.VEHICLE_MODEL_LABEL}
                    className="VehicleFilterModel"
                />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.VEHICLE_VERSION_LABEL}
                    className="VehicleFilterVersion"
                />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.VEHICLE_MODEL_YEAR_LABEL}
                    className="VehicleFilterModelYear"
                />
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField
                    variant="outlined"
                    size="small"
                    label={texts.VEHICLE_PLATE_LABEL}
                    className="VehicleFilterPlate"
                />
            </div>
            <div className="VehicleFilterAdjustField">
                {vehicleFilterItems.map((item, index) => {
                    return <ComboBox
                        key={index}
                        label={texts.HAS_VEHICLE_LABEL}
                        value={hasVehicle}
                        items={item.vehicle.hasVehicle}
                        onChange={onChangeHasVehicle}
                        className="VehicleFilterHasVehicle"
                    />
                })}
            </div>
            <div className="VehicleFilterAdjustField">
                <TextField 
                    variant="outlined" 
                    size="small" 
                    label={texts.VEHICLE_CHASSIS_LABEL} 
                    className="VehicleFilterChassis" 
                />
            </div>
            <div className="VehicleFilterAdjustField">
                <SimpleDatePicker 
                    label={texts.SALE_DATE_LABEL} 
                    inputFormat={texts.DATE_FORMAT} 
                    className="VehicleFilterSaleDate" 
                />
            </div>
            <div className="VehicleFilterAdjustField">
                <SimpleDatePicker 
                    label={texts.INVOICE_DATE_LABEL} 
                    inputFormat={texts.DATE_FORMAT} 
                    className="VehicleFilterInvoiceDate"
                 />
            </div>
        </div>
    </div>

    function onChangeHasVehicle(event: SelectChangeEvent<string>) {
        setHasVehicle(event.target.value);
    }
}