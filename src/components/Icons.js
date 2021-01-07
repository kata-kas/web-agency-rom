import { Icon } from '@iconify/react';
import reactIcon from '@iconify-icons/logos/react';
import angularIcon from '@iconify-icons/logos/angular-icon';
import vueIcon from '@iconify-icons/logos/vue';
import javascriptIcon from '@iconify-icons/logos/javascript';
import fileTypePhp3 from '@iconify-icons/vscode-icons/file-type-php3';
import goIcon from '@iconify-icons/logos/go';
import pythonIcon from '@iconify-icons/logos/python';
import laravelIcon from '@iconify-icons/logos/laravel';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import codeIgniter from '@iconify-icons/logos/codeigniter';
import phalconIcon from '@iconify-icons/logos/phalcon';
import djangoIcon from '@iconify-icons/logos/django';
import flaskIcon from '@iconify-icons/logos/flask';
import kotlinIcon from '@iconify-icons/logos/kotlin';
import fileTypeSwift from '@iconify-icons/vscode-icons/file-type-swift';
import dartIcon from '@iconify-icons/logos/dart';
import cPlusplus from '@iconify-icons/logos/c-plusplus';
import cSharp from '@iconify-icons/logos/c-sharp';
import dockerIcon from '@iconify-icons/logos/docker-icon';
import netlifyIcon from '@iconify-icons/logos/netlify';
import { Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Icons(){
    return (
      <div 
      style={{fontSize:'50px'}}
      >   
          <h2>Din 2016 până în prezent am lucrat cu următoarele limbaje de programare, frameworks și tehnologii: </h2>
          <Icon icon={javascriptIcon}/>&nbsp;
          <Icon icon={reactIcon}/>&nbsp;
          <Icon icon={angularIcon}/>&nbsp;
          <Icon icon={vueIcon}/>&nbsp;
          <Icon icon={nodejsIcon}/> &nbsp;
          <Icon icon={fileTypePhp3}/>&nbsp;
          <Icon icon={laravelIcon}/>&nbsp;
          <Icon icon={codeIgniter}/>&nbsp;
          <Icon icon={phalconIcon}/>&nbsp;
          <Icon icon={pythonIcon}/>&nbsp;
          <Icon icon={djangoIcon}/>&nbsp;
          <Icon icon={flaskIcon}/><br/>
          <Icon icon={kotlinIcon}/> &nbsp;
          <Icon icon={fileTypeSwift}/>&nbsp;
          <Icon icon={dartIcon}/>&nbsp;
          <Icon icon={cPlusplus}/>&nbsp;
          <Icon icon={cSharp}/><br/>&nbsp;
          <Icon icon={dockerIcon}/>&nbsp;
          <Icon icon={netlifyIcon}/> <br/>
          <Icon icon={goIcon}/><br/>
          <h3>... și multe altele</h3>
          <Link to="/contact">
          <Button size="lg">Cere o cotație</Button>
          </Link>
          </div>)}

export default Icons;