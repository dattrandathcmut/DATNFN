import React from 'react';

import { useCameraDevices } from 'react-native-vision-camera';
import LoadingView from './components/LoadingView';
import PermissionDenied from './components/PermissionDenied';
import ObjectDetector from './components/ObjectDetector';
import { useCameraPermission } from './hooks/useCameraPermission';

export default function openCamera() {
    const devices = useCameraDevices();
    const device = devices[0];

    const { pending, isPermissionGranted } = useCameraPermission();

    if (!device || pending) return <LoadingView />;
    if (!isPermissionGranted) return <PermissionDenied />;
    return <ObjectDetector device={device} />;
}