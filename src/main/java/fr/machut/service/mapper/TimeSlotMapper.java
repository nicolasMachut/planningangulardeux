package fr.machut.service.mapper;

import fr.machut.domain.*;
import fr.machut.service.dto.TimeSlotDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity TimeSlot and its DTO TimeSlotDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TimeSlotMapper extends EntityMapper <TimeSlotDTO, TimeSlot> {
    
    
    default TimeSlot fromId(Long id) {
        if (id == null) {
            return null;
        }
        TimeSlot timeSlot = new TimeSlot();
        timeSlot.setId(id);
        return timeSlot;
    }
}
