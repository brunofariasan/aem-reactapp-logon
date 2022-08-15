/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.reactapp.core.models.Meucomponentehome;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Meucomponentehome.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/meucomponentehome")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MeucomponentehomeImpl
    implements Meucomponentehome
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleRedOne;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleRedTwo;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleRedThree;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleRedFour;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleBlackOne;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleBlackTwo;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleBlackThree;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleBlackFour;
    @SlingObject
    private Resource resource;

    @Override
    public String getTitleRedOne() {
        return titleRedOne;
    }

    @Override
    public String getTitleRedTwo() {
        return titleRedTwo;
    }

    @Override
    public String getTitleRedThree() {
        return titleRedThree;
    }

    @Override
    public String getTitleRedFour() {
        return titleRedFour;
    }

    @Override
    public String getTitleBlackOne() {
        return titleBlackOne;
    }

    @Override
    public String getTitleBlackTwo() {
        return titleBlackTwo;
    }

    @Override
    public String getTitleBlackThree() {
        return titleBlackThree;
    }

    @Override
    public String getTitleBlackFour() {
        return titleBlackFour;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
