package fr.machut.service.impl;

import fr.machut.service.TimeSlotService;
import fr.machut.domain.TimeSlot;
import fr.machut.repository.TimeSlotRepository;
import fr.machut.service.dto.TimeSlotDTO;
import fr.machut.service.mapper.TimeSlotMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing TimeSlot.
 */
@Service
@Transactional
public class TimeSlotServiceImpl implements TimeSlotService{

    private final Logger log = LoggerFactory.getLogger(TimeSlotServiceImpl.class);

    private final TimeSlotRepository timeSlotRepository;

    private final TimeSlotMapper timeSlotMapper;

    public TimeSlotServiceImpl(TimeSlotRepository timeSlotRepository, TimeSlotMapper timeSlotMapper) {
        this.timeSlotRepository = timeSlotRepository;
        this.timeSlotMapper = timeSlotMapper;
    }

    /**
     * Save a timeSlot.
     *
     * @param timeSlotDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public TimeSlotDTO save(TimeSlotDTO timeSlotDTO) {
        log.debug("Request to save TimeSlot : {}", timeSlotDTO);
        TimeSlot timeSlot = timeSlotMapper.toEntity(timeSlotDTO);
        timeSlot = timeSlotRepository.save(timeSlot);
        return timeSlotMapper.toDto(timeSlot);
    }

    /**
     *  Get all the timeSlots.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<TimeSlotDTO> findAll(Pageable pageable) {
        log.debug("Request to get all TimeSlots");
        return timeSlotRepository.findAll(pageable)
            .map(timeSlotMapper::toDto);
    }

    /**
     *  Get one timeSlot by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public TimeSlotDTO findOne(Long id) {
        log.debug("Request to get TimeSlot : {}", id);
        TimeSlot timeSlot = timeSlotRepository.findOne(id);
        return timeSlotMapper.toDto(timeSlot);
    }

    /**
     *  Delete the  timeSlot by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete TimeSlot : {}", id);
        timeSlotRepository.delete(id);
    }
}
