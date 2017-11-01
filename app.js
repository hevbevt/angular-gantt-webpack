import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import routing from './app.config';
import aps from './aps';

angular.module('app', [
        'gantt.sortable',
        'gantt.movable',
        'gantt.drawtask',
        'gantt.tooltips',
        'gantt.bounds',
        'gantt.progress',
        'gantt.table',
        'gantt.tree',
        'gantt.groups',
        'gantt.resizeSensor',
        'gantt.overlap',
        'gantt.dependencies',
        'gantt',
        uiRouter,
        aps,
    ])
    .config(routing);