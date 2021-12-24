import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

import { deleteDirectories, deleteFiles, downloadFile, getRecords } from '../../stateManagement/actions/records';
import { createPath, item, pathDir } from '../../utils/helpers';
import { RoutesBanner } from '../../components/layout/RoutesBanner';
import { File } from '../../components/common/File';
import { Load } from '../../components/common/Load';

import directorie from '../../assets/img/directorie.jpg';
import file from '../../assets/img/file.png';

import image4 from '../../assets/img/4.jpeg';

export const RecordsView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { load } = useSelector(state => state.loading);
    const { directories, files, urlDownloadFile } = useSelector(state => state.records);

    // =============== Change path between files ===============

    // We separate the path, so that only the element in position 2 is occupied.
    const listPathname = pathname.split('/');
    const convert = listPathname[2].replaceAll('--', '/');
    const [handlePathname, setHandlePathname] = useState(convert);

    const handlePath = (name_file) => {
        // We prepare the route to request the data from the server.
        const nameFileNew = name_file.replaceAll(' ', '__');
        const newPath = handlePathname.concat('/', nameFileNew);
        setHandlePathname(newPath);
        pathDir.path = newPath;
        // We prepare the route to change the screen, 
        // with the data that has already been requested.
        const otherPath = '/home/'.concat(listPathname[2], '--', nameFileNew);
        navigate(otherPath, { replace: true });
    }

    useEffect(async () => {
        dispatch( deleteDirectories() );
        dispatch( deleteFiles() );
        setHandlePathname(convert);
        pathDir.path = convert;
        await dispatch( getRecords(pathDir.path) );
    }, [dispatch, handlePathname, listPathname[2]], pathDir.path);

    // ================= Download the files ====================
    useEffect(() => {
        if( load.loadCompress ){
            Swal.fire({
                title: 'Comprimiendo archivos',
                html: 'Espere un momento, por favor.',
                allowOutsideClick: false,
                allowEscapeKey: false,
                backdrop: true,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
        }
        if( !load.loadCompress ){
            Swal.close();
        }
    }, [load.loadCompress]);

    useEffect(() => {
        item.element = urlDownloadFile;
    }, [urlDownloadFile]);

    const handleDownload = async (event, specific_element) => {
        event.stopPropagation();
        const pathSend = createPath( pathname, '/home/', specific_element );
        await dispatch( downloadFile(pathSend) );

        const download_file = document.getElementById('download_file');
        download_file.click();
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <img className='back__img' src={ image4 } alt='backgroun__front' />
            <RoutesBanner mainElement={{title: 'home', url: '/'}} />
            {load.loadRecords ?  <Load /> : (
                <div className='container__records_pos'>
                    {
                        directories.map( item => (
                            <File
                                fileName={ item.directory }
                                redirectHandler={ handlePath }
                                renderingImage={ directorie }
                                downloadHandler={ handleDownload }
                                key={ item.id }
                            />
                        ))
                    }
                    {
                        files.map( item => (
                            <File
                                fileName={ item.file }
                                renderingImage={ file }
                                downloadHandler={ handleDownload }
                                key={ item.id }
                            />
                        ))
                    }
                </div>
            )}
            <a 
                style={{display: 'none'}}
                download={true}
                href={ item.element }
                id='download_file'
                target='_blank'
            />
        </div>
    )
}