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

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.reactapp.core.models.TabsBodyHome;
import com.reactapp.core.models.multifielddFourModel;
import com.reactapp.core.models.multifielddOneModel;
import com.reactapp.core.models.multifielddThreeModel;
import com.reactapp.core.models.multifielddTwoModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    TabsBodyHome.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/tabs-body-home")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TabsBodyHomeImpl
    implements TabsBodyHome
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<multifielddOneModel> fielddOne;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<multifielddTwoModel> fielddTwo;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<multifielddThreeModel> fielddThree;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<multifielddFourModel> fielddFour;
    @SlingObject
    private Resource resource;

    @Override
    public List<multifielddOneModel> getFielddOne() {
        return fielddOne != null ? Collections.unmodifiableList(fielddOne) : null;
    }

    @Override
    public List<multifielddTwoModel> getFielddTwo() {
        return fielddTwo != null ? Collections.unmodifiableList(fielddTwo) : null;
    }

    @Override
    public List<multifielddThreeModel> getFielddThree() {
        return fielddThree != null ? Collections.unmodifiableList(fielddThree) : null;
    }

    @Override
    public List<multifielddFourModel> getFielddFour() {
        return fielddFour != null ? Collections.unmodifiableList(fielddFour) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
