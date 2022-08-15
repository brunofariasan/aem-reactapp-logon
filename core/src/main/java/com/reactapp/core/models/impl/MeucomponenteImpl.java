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
import com.reactapp.core.models.Meucomponente;
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
    Meucomponente.class,
    ComponentExporter.class
}, resourceType = "aem-reactapp-login/components/meucomponente")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MeucomponenteImpl
    implements Meucomponente
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleCenter;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textOne;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textButton;
    @SlingObject
    private Resource resource;

    @Override
    public String getTitleCenter() {
        return titleCenter;
    }

    @Override
    public String getTextOne() {
        return textOne;
    }

    @Override
    public String getTextButton() {
        return textButton;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
